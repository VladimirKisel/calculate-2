<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Калькулятор страховок</title>
     <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<div class="container">

 <select required id="tupe-tz" form="form" name="tupe-tz" value=""></select>
 <select required id="cat-tz" form="form" name="cat-tz"></select>
 <select required id="cities-check" form="form" name="cities-check"></select>
 <select required id="scope-use" form="form" name="scope-use"></select>
 <select required id="driving-experience" form="form" name="driving-experience"></select>
 <select required id="period-use" form="form" name="period-use"></select>
 <button id="calculate" form="form" type="submit"> Розрахувати </button>
</div>
<div class="bttn">
   <div id="dialog">
    <form id="form" action="index.php" method="post">
     <p>Замовлення полісу</p>
     <li id="tupe">Тип автомобіля: </li>
     <li id="cat">Категорія автомобіля: </li>
     <li id="cities">Місто реєстрації: </li>
     <li id="scope">Сфера використання: </li>
     <li id="driving">Водійський стаж: </li>
     <li id="period">Термін дії договору: </li>
     <input readonly type="text" name="calc" id="calc" form="form" value="">
        <div class="field">
          <label>Ваше ім'я </label> 
          <input  required id="fio" type="text" name="fio" placeholder="Ваш ім'я"><br>
        </div>
     
        <div class="field">
          <label>Телефон</label> 
          <input  required id="tel" type="text" name="tel" placeholder="Телефон"><br>
        </div>

        <div class="field">
       <label>Електронна адреса</label> <input required id="emali" type="text" name="email"  placeholder="Електронна адреса"><br>
        </div >

        <div class="field">
            <label>Повідомлення</label><textarea required name="message" id="" cols="40" rows="5" placeholder="Повідомлення">                            
            </textarea><br>
        </div>

         <div class="zakaz">
            <input id="zakaz" type="submit" name="zakaz" value="Замовити поліс">
        </div>

     </form>



      <div class="close"><button type="reset" id="close">Закрити</button></div>
    </div> 

   
 </div>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="scriptTest.js"></script>
  </body>
</html> 
 <?php
    if(!empty($_POST)){

    $message = "Вам пришло новое сообщение с сайта: \n"
    . "ім'я:" . $_POST['fio'] . "\n"
    . "адреса електронної пошти:" . $_POST['email'] . "\n"
    . "телефон:" . $_POST['tel'] . "\n"
    . "Тип тз: " . $_POST['tupe-tz'] . "\n"
    . "Категорія тз: " . $_POST['cat-tz'] . "\n"
    . "місто реєстрації тз: " . $_POST['cities-check'] . "\n"
    . "використання тз: " . $_POST['scope-use'] . "\n"
    . "Водійський стаж: " . $_POST['driving-experience'] . "\n"
    . "період дії полісу: " . $_POST['period-use'] . "\n"
    . "Розрахунокова " . $_POST['calc'] . "\n"

    . "повідомлення: \n" . $_POST['message'];

    $resaltMail = mail("test@test.com","Повідомлення від Замовника", $message);
    if ($resaltMail) {
        echo "<script>alert(\"Повідомлення відправленно вдало!\");</script>"; 
    }
    else {
        echo "<script>alert(\"Повідомлення не відправленно ! Щось трапилось!\");</script>"; 
        
    }
}


 ?>
