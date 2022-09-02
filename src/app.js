/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [".com", ".net"];

  function domainGenerator(pron, adjt, n, dom) {
    let final = [];
    for (let i = 0; i < pron.length; i++) {
      for (let j = 0; j < adjt.length; j++) {
        for (let k = 0; k < n.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            final.push(
              pron[i]
                .concat(adjt[j])
                .concat(n[k])
                .concat(dom[l])
            );
          }
        }
      }
    }
    return final;
  }

  console.log(domainGenerator(pronoun, adj, noun, domains));
};
