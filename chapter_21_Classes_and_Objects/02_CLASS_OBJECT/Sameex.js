// excercise 1 Calculator where you will have different methods available for some subtraction, modulus, division, and multiplication

class Calculator
{
add(a,b)
{
 console.log("addition",a+b)
}
sub(a,b)
{
 console.log("Subtraction",a-b)
}
mul(a,b)
{
 console.log("Multiplication",a*b)
}
div(a,b)
{
 console.log("Devision",a/b)
}

}

const a1= new Calculator();
a1.add(20,10);
a1.sub(20,10);
a1.mul(20,10);
a1.div(20,10);

// Exercise 2create a class with the static and non-static methods as well as variables. It will be a simple class of our Playwright 2x batch. You will be also printing out the students. Create 10 objects of students and print them. Also create a print method
class PalywrightBatch
{
 static batch_name="Palywright2x"
 static field="QA"

  constructor(name,age,experience)
 {
   this.name=name
   this.age=age
   this.experience=experience
   console.log("name:",this.name)
   console.log("age:",this.age)
   console.log("experience:",this.experience)   
}
static experiance()
{
   console.log("Batch_Name",PalywrightBatch.batch_name)
   console.log("field",PalywrightBatch.field)
}}
PalywrightBatch.experiance();
const student1=new PalywrightBatch("Arun",45,15);
const student2=new PalywrightBatch("Ravi",25,5);
const student3=new PalywrightBatch("Ryan",35,9);