<?php
  /*
  PHP Methods
  protected - same as private, but also can be altered by sub-classes
  public - outside can modify this
  private - only classes can modify this attribute
  */

  class Android {

    protected $birth_name;
    protected $operating_system;
    protected $start_up_sound;
    protected $id;

    public static $population = 1;

    const PI = "3.14159";

    // Android::PI

    function getName() {
      return $this->birth_name;
    }

    function __construct() {

      $this->id = rand(100, 1000000000);
      $this->birth_name = 'Android' . $this->id;
      $this->operating_system = 'FreeWareOS';
      $this->start_up_sound = 'boop';

      echo $this->id . " has been assigned.\n";
      Android::$population++;

    }

    public function __destruct() {
      echo $this->birth_name . " is being destroyed.\n";
    }

    function __get($variable) {
      echo "Ask for " . str_replace("_", " ", $variable) . ".\n";
      return $this->$variable;
    }


    function __set($variable, $value) {
      switch($variable) {
        case "birth_name":
          $this->birth_name = $value;
          break;
        case "operating_system":
          $this->operating_system = $value;
          break;
        case "start_up_sound":
          $this->start_up_sound = $value;
          break;
        default:
          echo $variable . " not found.\n";
      }
      echo "Set " . str_replace("_", " ", $variable) . " to " . $value . ".\n";
    }

    function __toString(){
      return $this->birth_name . " says " . $this->start_up_sound .
      " while ". $this->operating_system . " starts running. ID: " .
      $this->id . ", sequence: " . Android::$population . "\n";
    }

    function run() {
      echo $this->birth_name . " operates economically.\n";
    }
  }

  class Android_Gen_2 extends Android {
    function run() {
      echo $this->birth_name . " operates significantly fast.\n";
    }
  }

  class Android_Gen_3 extends Android_Gen_2 implements Singable{
    protected $telepathy;

    public function tele() {
      echo $this->birth_name . $this->telepathy;
    }

    public function setTele(string $variable=" emits signals you can understand.") {
      $this->telepathy = $variable;
    }

    function run() {
      echo $this->birth_name . " has visions of the future.\n";
    }

    function __toString(){
      return $this->birth_name . " fails to respond with the initial " . $this->start_up_sound .
      " sound while ". $this->operating_system . " boots up. ID: " .
      $this->id . ", sequence: " . Android::$population . "\n";
    }

    function sing() {
      echo $this->birth_name . " uses an atiquated device called a flute.\n";
    }

    static function add_this($first, $second) {
      return $first . " " . $second;
    }
  }

  interface Singable {
    public function sing();
  }

  function sing_function(Singable $passed_var) {
    $passed_var->sing();
  }

  function sing_function_ver2(Android_Gen_3 $passed_var) {
    $passed_var->sing();
  }

  $android_clone = new Android_Gen_3();

  echo $android_clone->birth_name . " says " . $android_clone->start_up_sound . ".\n";

  $android_clone->birth_name = "l33t";
  $android_clone->operating_system = "Windows 2057";
  $android_clone->start_up_sound = "Beeonnn";

  echo $android_clone->birth_name . " says " . $android_clone->start_up_sound . ".\n";
  $android_clone->run();

  // $android_clone->setTele(" hello\n");
  // $android_clone->tele();

  echo $android_clone;

  // $android_clone->sing();
  sing_function($android_clone);
  sing_function_ver2($android_clone);

  echo Android_Gen_3::add_this('first', 'last');

  $android_clone_replica = clone $android_clone;

  echo "\n\n";

  echo $android_clone_replica->birth_name . " says " . $android_clone_replica->start_up_sound . ".\n";
 ?>
