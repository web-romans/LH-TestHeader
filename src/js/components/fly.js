

import { throttle } from '../functions/throttle';

const mediumTablet = 1000;
let documentWIdth = document.documentElement.clientWidth;

function move(elSelector, tabletParentSelector, tabletPosSelector, descParentSelector, descPosSelector) {
  const clientWidth = document.documentElement.clientWidth;

  const el = document.querySelector(elSelector);
  const tabletParent = document.querySelector(tabletParentSelector);
  const descParent = document.querySelector(descParentSelector);
  const tabletPos = document.querySelector(tabletPosSelector);
  const descPos = document.querySelector(descPosSelector);

  (clientWidth <= mediumTablet) ? moveBlock(el, tabletParent, tabletPos) : moveBlock(el, descParent, descPos);

}

function moveBlock(item, content, pos) {
  pos !== "" ? content.insertBefore(item, pos) : content.appendChild(item);
}

const fly = () => {
  move(".logo", ".header-top", ".top-menu", ".header__container", ".header-content");
  move(".userbar", ".header-top", ".burger", ".header-content__content", ".header-products");
  move(".region", ".header-top", ".burger", ".header-contacts", "null");
  move(".header-footer", ".top-menu", ".top-menu__list", ".header__container", "null");
  move(".header-contacts", ".top-menu", "null", ".header-content__content", "null");
  move(".userbox", ".top-menu", ".header-contacts", ".header-top", "null");
}



let flew = throttle(fly)

flew();

window.addEventListener("resize", () => {
  const clientWidth = document.documentElement.clientWidth;
  if (clientWidth !== documentWIdth) {
    flew();
  }
});
