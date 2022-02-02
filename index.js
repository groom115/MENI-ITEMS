import "./styles.css";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:
      "https://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img:
      "http://www.fastfoodmenunutrition.com/wp-content/uploads/2015/03/fast-food-300x188.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "http://im.rediff.com/getahead/2018/jan/29rediff-foodies1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img:
      "https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img:
      "https://i.pinimg.com/originals/35/72/61/35726141b233c19970c9506f17dc66fb.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img:
      "https://cache.lovethispic.com/uploaded_images/blogs/10-Healthy-Food-Inspiration-And-Ideas-48900-8.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img:
      "https://i.pinimg.com/originals/c0/5e/df/c05edf725adf08b6363de24c9e7c8fe1.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img:
      "http://www.michiganrvandcampgrounds.org/wp-content/uploads/2016/11/sandwich.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img:
      "https://boarshead.scdn5.secure.raxcdn.com/img/_content/recipe/1559385809-deluxe-low-sodium-roast-beef-sandwich/detail-001.1551148477.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img:
      "https://www.quickanddirtytips.com/sites/default/files/images/6903/Artichokes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
