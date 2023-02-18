const paragraphs = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minus perferendis quod cumque, molestias vel minima ut
    velit, nemo error odio, ducimus alias! Ducimus vitae maiores
    quos sit hic! Nobis ex vel, alias atque distinctio accusamus 
    modi consequuntur assumenda`,
  `magnam ullam velit quisquam recusandae impedit inventore 
    laudantium architecto eos ratione non? Explicabo maiores 
    obcaecati laborum deserunt, minus assumenda molestiae debitis 
    incidunt dolorem officia repellendus minima pariatur vel, 
    modi consectetur ullam sequi rerum`,
  `impedit earum reiciendis. Placeat, in fuga temporibus amet 
    distinctio id, dolores perferendis cumque eos ipsam
    ducimus aliquid rerum modi. Soluta amet, 
    ipsa necessitatibus error ducimus dolores maiores.`,
  `Rem modi sapiente ab. Impedit ipsa soluta reprehenderit vero obcaecati
    sapiente error quasi numquam accusantium! Nobis sint eaque officiis 
    corporis impedit itaque qui nisi blanditiis, quae asperiores esse`,
  `optio quam sunt et voluptatum vitae amet aperiam quas ipsam cum tenetur unde modi repellat quod.
 Sapiente inventore ab consequatur facilis animi doloremque, 
earum voluptatibus maiores nostrum illo nobis minima illum 
autem beatae officiis, asperiores corporis consequuntur`,
  ` quo commodi at quas. Cupiditate veniam molestias, sapiente harum suscipit recusandae nisi 
nobis vero temporibus, 
aspernatur voluptates voluptatem voluptate ratione incidunt deserunt 
beatae ex delectus amet? Non illum voluptate quisquam? 
Voluptate error ratione suscipit veniam necessitatibus. Eaque.`,
  `Reprehenderit atque nihil perferendis explicabo. Totam minima eveniet tempora reiciendis error quam repellendus ducimus
fugit iure`,
  `aspernatur! Minus iusto praesentium nemo non rerum, earum, sapiente modi, commodi similique temporibus omnis.
Dolore amet beatae saepe, sed unde voluptatem eius dolores libero voluptatum debitis et.`,
  `Necessitatibus natus officiis neque! Molestias temporibus architecto voluptates ipsum consequuntur harum suscipit, debitis saepe ipsa vel cum
excepturi corrupti quos laboriosam nam perferendis maiores accusamus culpa deleniti, doloribus libero`,
  `ea blanditiis placeat iure? Magni laboriosam, voluptas distinctio architecto vitae nobis accusamus harum nulla consequuntur quasi!
Odit eius, necessitatibus eaque ullam eveniet eum doloribus ipsam officia laborum voluptas`,
  `veniam saepe quam in eos tempora molestias maiores fugiat harum perspiciatis rem inventore ipsa dicta consectetur. Sunt neque impedit eligendi
quasi modi ex dolore, fugiat repellendus aspernatur porro`,
  `beatae consequatur deleniti aperiam veritatis! Reprehenderit
deleniti placeat itaque quaerat quod voluptatibus vel perferendis rem, amet quia libero magni porro earum accusamus,
necessitatibus vero doloremque cum`,
  ` ratione esse? Voluptatem velit error accusantium expedita exercitationem
voluptatibus quos explicabo repudiandae sapiente omnis!`,
];

const amount = document.querySelector(".amount");
const form = document.querySelector("#articleForm");
const generate = document.querySelector(".generate");

document.querySelector(".start").addEventListener("click", () => {
  document.querySelector(".amount").foucs();
});

form.addEventListener("submit", function (eve) {
  // if not empty
  if (amount.value === "") {
    document.querySelector(".error").style = "display: block";
    document.querySelector(".overlay").style = "display: block";
    setTimeout(() => {
      document.querySelector(".error").style = "display: none";
      document.querySelector(".overlay").style = "display: none";
    }, 4000);
  } else {
    // console.log(amount.value);
    let random = Math.floor(Math.random() * paragraphs.length);

    if (amount.value <= 0 || amount.value > 10) {
      const articleItem = `
      <div class="items">
      <p>${paragraphs[random]}</p>
      <div class="copy">
          <i class="fas fa-copy"></i>
      </div></div>`;
      // console.log(articleItem);
      document.querySelector(".articles").innerHTML = articleItem;
    } else {
      let slicedText = paragraphs.slice(0, amount.value);
      slicedText = slicedText
        .map(function (item) {
          const articleItem = `
                  <div class="items">
                  <p>${item}</p>
                  <div class="copy">
                      <i class="fas fa-copy"></i>
                  </div></div>`;
          document.querySelector(".articles").innerHTML += articleItem;
        })
        .join("");
      // show causion div
      document.querySelector(".causion").style = "display: none";
    }
  }
  eve.preventDefault();
});
