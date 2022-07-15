<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>英語テスト</title>
        <!-- <base href="/Users/shusakukoike/Documents/primarySchoolTest/"> -->
        <link rel="stylesheet" href="../startCSS/startEnglish.css">        
    </head>

    <body>
        <?php
        $button = $_GET['start'];

        ?>
        <header class="center">
            <h1>問題1</h1>
            <p>制限時間は10分です。</p>
            <p>以下の問題と解いて解答欄に記入してください。</p>
            <p>10+7×40=</p>
            <form action="../english.php" method="GET">
                <label for="question1" >解答欄</label>
                <input type="text" id="question1" name="question1">
                <input type="submit" value="解答" name="button1">
            </form>
        </header>
        <footer class="bottom">
            <small>&copy; 2022 Shusaku Koike</small>
        </footer>
    </body>
</html>