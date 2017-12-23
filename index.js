function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
 const rankedListContents = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedListContents.length; i < l; i++) {
    let children = rankedListContents[i].children;
    
    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  const dchild = document.querySelector('#grand-node div div div div');
  return dchild;
 } 