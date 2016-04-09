<!-- adlib.php -->
<!-- Created 4/8/2016 -->
<!-- Author: John Westhoff (johnjwesthoff@gmail.com) -->

<!-- A simple web form for getting randomly filled madlibs -->
<?php
$ADJEFILE = '/home/john/wolfratbot/modules/adlib/adjectivelist.txt';
$NOUNFILE = '/home/john/wolfratbot/modules/adlib/nounlist.txt';
$VERBFILE = '/home/john/wolfratbot/modules/adlib/verblist.txt';
if (strlen($_POST['story']) > 0)
{
    $text = trim($_POST['story']);
    $text = nl2br($text);
   
    $f_adje = file($ADJEFILE); 
    $f_noun = file($NOUNFILE); 
    $f_verb = file($VERBFILE); 

    $repl = array(
        "{n}" => $f_noun,
        "{a}" => $f_adje,
        "{v}" => $f_verb
    );

    foreach ($repl as $key => $val)
    {
        while (($pos = strpos($text,$key)) !== false)
        {
            $word = "<b>" . trim($val[rand(0, count($val) - 1)]) . "</b>";
            $text = substr_replace($text, $word, $pos, strlen($key));
        }
    }
    $nurl = 'http://www.johnbot.me/adlib3.php?stored_story=' . urlencode($text);
    header( 'Location: ' . $nurl); 
}
else
{
    echo $_POST['forward'];
    $text = $_GET['stored_story'];
}
?>
<!-- Begin the page document -->
<html>
<head>
<title>Ad Lib Filler Outer</title>
<style type="text/css">
.form-style-7{
    max-width:400px;
    margin:10px auto;
    background:#fff;
    border-radius:2px;
    padding:20px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-7 h1{
    display: block;
    text-align: center;
    padding: 0;
    margin: 0px 0px 20px 0px;
    color: #5C5C5C;
    font-size:x-large;
}
.form-style-7 ul{
    list-style:none;
    padding:0;
    margin:0;   
}
.form-style-7 dl{
    display: block;
    padding: 2px;
    border:1px solid #DDDDDD;
    margin-bottom: 20px;
    border-radius: 3px;
    text-align: left;
}
.form-style-7 dd{
    display: block;
    padding: 2px;
    margin-bottom: 10px;
    border-radius: 3px;
    text-align: left;
}
.form-style-7 li{
    display: block;
    padding: 9px;
    border:1px solid #DDDDDD;
    margin-bottom: 2px;
    border-radius: 3px;
}
.form-style-7 li:last-child{
    border:none;
    margin-bottom: 0px;
    text-align: center;
}
.form-style-7 li > label{
    display: block;
    float: left;
    margin-top: -19px;
    background: #FFFFFF;
    height: 14px;
    padding: 2px 5px 2px 5px;
    color: #B9B9B9;
    font-size: 14px;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
}
.form-style-7 input[type="text"],
.form-style-7 input[type="date"],
</style>
</head>
<body>
<form class="form-style-7" method="post">
<h1>Story</h1>
<dl><?php echo $text; ?></dl>
<ul>
<li>
    <label for="story">Story</label>
    <textarea rows="6" cols="50" name="story"><?php echo htmlspecialchars($_POST['story']); ?></textarea>
    <span>Enter your story here</span>
    <input type="hidden" name="forward" value=<?php echo $_POST['story']; ?>>
</li>
<dd>
    Use {n} for nouns<br>
    Use {v} for verbs<br>
    Use {a} for adjectives<br>
</dd>
<li>
    <input type="submit" value="Make Me a Story">
</li>
</ul>
</form>
</body>
</html>
