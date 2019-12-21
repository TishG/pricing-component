const pricing = {
  basic: "$19.99",
  professional: "$24.99",
  master: "$39.99"
};

const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");

basicPrice.textContent = pricing["basic"];
professionalPrice.textContent = pricing["professional"];
masterPrice.textContent = pricing["master"];

const toggler = document.querySelector('input[type="checkbox"]');
toggler.addEventListener("click", function(e) {
  if (!e.target.checked) {
    basicPrice.textContent = "$199.99";
    professionalPrice.textContent = "$249.99";
    masterPrice.textContent = "$399.99";
  } else {
    basicPrice.textContent = pricing["basic"];
    professionalPrice.textContent = pricing["professional"];
    masterPrice.textContent = pricing["master"];
  }
});
