// Write your solution here!
//beforeEach(function () {
 //   cats.length = 0;
  
   // cats.push("Milo", "Otis", "Garfield");
  //});

  const cats =["Milo", "Otis", "Garfield"];

 function destructivelyAppendCat(name){
    cats.push(name="Ralph");
 };

 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(name){
    cats.unshift(name="Bob");
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  //describe('destructivelyRemoveLastCat()', function () {
    //it('removes the last cat from the cats array', function () {
      //destructivelyRemoveLastCat();

      //expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
   // });
  //});

 function destructivelyRemoveLastCat(name){
    cats.pop(name="Garfield");
 };

 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  //describe('destructivelyRemoveFirstCat()', function () {
    //it('removes the first cat from the cats array', function () {
      //destructivelyRemoveFirstCat();

      //expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
    //});
  //});

  function destructivelyRemoveFirstCat(name){
    cats.shift(name="Milo");
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  //describe('appendCat(name)', function () {
    //it('appends a cat to the cats array and returns a new array, leaving the ///cats array unchanged', function () {
      //expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

      //expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    //});
  //});

  function appendCat(name){
    return cats.concat(["Broom"]);
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function prependCat(name){
    return [name].concat(cats);
  };
  
  console.log(prependCat("placeholder"));

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  //describe('removeLastCat()', function () {
   // it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
      //expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

      //expect(cats).to.have.ordered.members(["Milos "Otis", "Garfield"]);
    //});
  //});

  function removeLastCat(){
    return cats.pop;
  }
  console.log(cats.pop);