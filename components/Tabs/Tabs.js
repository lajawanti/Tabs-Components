class TabLink {
  constructor(element) {
    this.tabLinkElement = element;
    this.data = this.tabLinkElement.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    this.tabItem = new TabItem(this.itemElement);
    this.tabLinkElement.addEventListener('click', (event) => this.select(event));
       
  } //constrctor ends..
  
  select() {
    //event.currentTarget.classList.toggle('tabLinkColor');
    event.currentTarget.style.background = "white";
    event.currentTarget.style.color = "black";
    this.tabItem.select();
  } // select() ends
} // class Tablink ends


class TabItem {
    constructor(element) {
        this.tabItemElement = element;
    }//TabItem constructor ends

    select() {
        this.tabItemElement.style.display = "block";
   //     this.tabItemElement.classList.toggle('show');
    } //TabItem select() ends
} //class TabItem ends


let tabLinkDom = document.querySelectorAll('.tabs-link');


tabLinkDom = Array.from(tabLinkDom).map(domElement => {
    return new TabLink(domElement);
});






// class TabLink {
//   constructor(element) {
//     this.element = element;
    
//     // Get the custom data attribute on the Link
//     this.data = this.element.dataset.tab;
    
//     // Using the custom data attribute get the associated Item element
//     this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
//     // Using the Item element, create a new instance of the TabItem class
//     this.tabItem = new TabItem(this.itemElement);
    
//     // Add a click event listener on this instance, calling the select method on click

//   };

//   select() {
//     // Get all of the elements with the tabs-link class
//     const links = document.querySelector('.tabs-link');

//     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//     Array.from(links).forEach(function(link) {

//     });

//     // Add a class named "tabs-link-selected" to this link
//     this.element;
    
//     // Call the select method on the item associated with this link

//   }
// }

// class TabItem {
//   constructor(element) {
//     this.element;
//   }

//   select() {
//     // Select all items elements from the DOM
//     // Remove the class "tabs-item-selected" from each element
//     // Add a class named "tabs-item-selected" to this element 
//   }
// }


// // START HERE: create a reference to the ".tabs" classes
// let links = document.querySelectorAll('.tabs');

// // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
// links = Array.from(links).map((links) => {
//                           return new TabLink(links);
//         });

// // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array