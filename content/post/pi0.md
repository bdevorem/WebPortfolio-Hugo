+++
date = "2016-10-07T23:24:00-04:00"
draft = false
title = "Raspberry Pi Zero Headless Setup"
tags = [ "Projects", "Raspberry", "Pi", "Zero", "Arch", "Linux", "Raspbian", "Jessie" ]
categories = [ "For Fun" ]
series = [ "Raspberry Pi Zero" ]
+++

I've become somewhat of a big fan of the
[Raspberry Pi Zero](https://www.raspberrypi.org/products/pi-zero/).
In addition to being cheap ($5), the Pi Zero also has the really cool ability to
be both a USB device or a USB host, thanks to its
[USB OTG](https://en.wikipedia.org/wiki/USB_On-The-Go) port.
This led to [an interesting discovery](http://blog.gbaman.info/?p=791) - the
ability to configure the Pi Zero with only a microSD card and a USB cable!  

I also realized that the Pi Zero *should* work with those little screens that
you put on top of the Raspberry Pi, like
[this one from adafruit](https://www.adafruit.com/product/2315). So, I ordered
one, and began working on setting up the Pi Zero.  

I wrote the following shell script for writing the image to the SD card as well
as making the configuration changes described in Andrew Mulholland's blog:  
```
#!/bin/bash
if [ "`whoami`" != 'root' ]; then
    echo 'You gotta be root!'
    exit 1
fi
img='2016-09-23-raspbian-jessie-lite.img'
drive='/dev/sdc'

dd bs=4M if="$img" of="$drive"
mkdir -p /mnt/sd
mount "$drive"1 /mnt/sd
echo 'dtoverlay=dwc2' >> /mnt/sd/config.txt
sed -i /mnt/sd/cmdline.txt -e 's/rootwait/rootwait modules-load=dwc2,g_ether/'
umount "$drive"1
```
After running this, I removed my SD card and inserted it in the Pi zero.
I then wrote the following script for ssh-ing into the pi without knowing
its IP address:
```
#!/bin/bash
ava=`avahi-browse -part | tail -n 1`
int=`echo $ava | cut -d';' -f 2`
adr=`echo $ava | cut -d';' -f 8`
ful="pi@$adr%$int"
ssh $ful $@
```
This grabs the interface name and IPv6 address of the Pi Zero and ssh-es into
it. (The above script could be improved to grep for raspberry rather than use
tail, but I was too lazy to make that change.)  

The next step was to share my internet connection with the Pi Zero. For that,
I wrote yet another shell script:
```
ava=`avahi-browse -part | tail -n 1`
dev=`echo $ava | cut -d';' -f 2`
ip addr add 192.168.123.100/24 dev $dev
iptables -I INPUT -p udp --dport 67 -i $dev -j ACCEPT
iptables -I INPUT -p tcp --dport 53 -s 192.168.123.0/24 -j ACCEPT
iptables -I INPUT -p udp --dport 53 -s 192.168.123.0/24 -j ACCEPT
iptables -t nat -A POSTROUTING -o wlp2s0 -j MASQUERADE
iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -i $dev -o wlp2s0 -j ACCEPT
res=`cat /etc/resolv.conf`
./dos.sh 'sudo ip addr add 192.168.123.201/24 dev usb0'
./dos.sh 'sudo ip route add default via 192.168.123.100 dev usb0'
scp /etc/resolv.conf pi@192.168.123.201:~/resolv.conf
./dos.sh 'sudo mv ~/resolv.conf /etc/resolv.conf'
```
This script assigns the host an IPv4 address on the interface to the Pi Zero,
then sets all the iptables settings. Then, it ssh-es into the Pi Zero to
configure things there, including copying over the DNS information of the host.
I'm not too proud of this script - it can definitely be cleaner - the IPs should
definitely not be magic numbers like they are, the interface name of my wi-fi
adapter (wlp2s0) should DEFINITELY be a variable, and it should probably enable
forwarding. (Right now it doesn't, so you have to manually set up packet
forwarding -
[the archlinux wiki](https://wiki.archlinux.org/index.php/Internet_sharing)
contains all the information one needs to do this.)  

Now the Pi Zero has been fully configured and even has internet all through
a single USB cable, which is definitely cool. To configure the screen,
I followed the steps on
[adafruit](https://learn.adafruit.com/adafruit-2-2-pitft-hat-320-240-primary-display-for-raspberry-pi/easy-install).
The current Raspbian images all have the required kernel modules, and they
support device tree, so I could skip most steps. I didn't bother trying their
helper script - instead I merely copied the configuration from one of their
prebuilt images. I wish I had shell scripted this process - in the future I
may do so, as well as update the other scripts to be a bit less horrible.

To actually draw to the screen, I made myself a member of the tty group:
```sudo usermod -a -G tty pi```

TODO INSERT PICTURE.
