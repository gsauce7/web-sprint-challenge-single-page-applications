// describe("Testing our form inputs", function() {
// 	beforeEach(function() {
//     cy.visit("http://localhost:3000/order/pizza");
//   });
  
// 	it("meets MVP", () => {
//         cy.get("[data-cy=name]").type("Gabriel").should("have.value", "Gabriel");
//         cy.get("[data-cy=email]").type("gabriel@henton.com").should("have.value", "gabriel@henton.com");
//         cy.get("[data-cy=password]").type("banana").should("have.value", "banana");
//         cy.get("[data-cy=terms]").check().should("be.checked");
//         cy.get("[data-cy=submit]").click().should("have.prop", {isDisabled: false});
        
//   });
// }); 


describe("Enter text into name field", function(){
    it("Types in a name and checks it has the same value", function(){
        cy.visit("http://localhost:3000/order/pizza");
        cy.get("input[name=name")
        .type("Bob")
        .should("have.value", "Bob")
    })
  })
  
  describe("Enter number into tel field", function(){
    it("Types in a number and checks it has the same value", function(){
        cy.get("input[name=tel")
        .type("5412251212")
        .should("have.value", "5412251212")
    })
  })
  
  describe("Select Multiple toppings", function(){
    it("Checks multiple toppings", function(){
        cy.get("input[name=cheese]").check();
        cy.get("input[name=bellPeppers]").check();
  
        cy.get("input[name=cheese]").should("be.checked");
        cy.get("input[name=bellPeppers]").should("be.checked");
    })
  })
  
  describe("Submits form", function(){
    it("Submits the form", function(){
        cy.get("button").click();
        cy.get("input[name=name]")
        .should("have.value", "");
    })
  });