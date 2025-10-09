/*
<div>
    <p>Hello there,</p>
    <p>I am a llama, hear my sirens roar:</p>
    <ul>
        <li>The</li>
        <li>Duck</li>
        <li>Lemonade</li>
        <li>Stand</li>
    </ul>
</div>
*/

const outerDiv = document.createElement("div");
document.body.appendChild(outerDiv);

const pText = ["Hello there,", "I am a llama, hear my sirens roar:"];
for (let i = 0; i < pText.length; i++) {
  const p = document.createElement("p");
  const text = document.createTextNode(pText[i]);
  p.appendChild(text);
  outerDiv.appendChild(p);
}

const ul = document.createElement("ul");
outerDiv.appendChild(ul);
const liText = ["The", "Duck", "Lemonade", "Stand"];
for (let i = 0; i < liText.length; i++) {
  const li = document.createElement("li");
  const text = document.createTextNode(liText[i]);
  li.appendChild(text);
  ul.appendChild(li);
}