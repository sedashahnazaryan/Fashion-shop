import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6  from"../img/img6.jpg";


function slidesData() {
    const slides = [
        {
          image: img1,
            text: "Royal Jewelry For Every Day"
        },
        {
          image: img2,
            text: "For millennia we, Armenians, have created our perception of beauty by creating civilization, culture and art.",
        },
        {
          image: img3,
             text: "Embroidered fabrics and original ornaments are closely related to other fields of Armenian art: sculpture, miniature painting, carpet weaving, jewelry.",
        },
        {
          image: img4,
             text: "We see beauty everywhere. There is a value in the treasury of Armenian culture, in which the national notions of material and caring beauty intersect.",
        },
        {
          image: img5,
             text:"At the heart of the word ornament is the root ard, which means dz, regulation. Jewelry had its meaning. You could tell from the crowd who the king was because of the jewelry he wore. Socially acceptable values expressed their sacred mysteries through jewelry.",
        },
        {
          image:img6,
          text: "Modern fashion trends invite us to combine fashion jewelry in the 21st century with different styles of clothing."
        }
      ];
      return slides;
}

export default slidesData;