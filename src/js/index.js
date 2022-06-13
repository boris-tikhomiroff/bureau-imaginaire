document.addEventListener("DOMContentLoaded", () => {
  let group = document.querySelector(".container");
  let nodes = document.querySelectorAll(".item");
  let total = nodes.length;
  let ease = Power1.easeInOut;
  let boxes = [];

  function annimate() {
    for (let i = 0; i < total; i++) {
      let node = nodes[i];

      TweenLite.set(node, { x: 0 });

      boxes[i] = {
        transform: node._gsTransform,
        x: node.offsetLeft,
        y: node.offsetTop,
        node,
      };
    }

    TweenMax.to(nodes[0], 8, {
      order: 5,
      roundProps: "order",
      repeat: -1,
      yoyo: true,
      ease: Power0.easeNone,
      onUpdate: layout,
    });
  }

  function layout() {
    for (let i = 0; i < total; i++) {
      let box = boxes[i];

      let lastX = box.x;
      let lastY = box.y;

      box.x = box.node.offsetLeft;
      box.y = box.node.offsetTop;

      if (lastX === box.x && lastY === box.y) continue;

      let x = box.transform.x + lastX - box.x;
      let y = box.transform.y + lastY - box.y;

      TweenLite.fromTo(box.node, 0.5, { x, y }, { x: 0, y: 0, ease });
    }
  }

  // setTimeout(annimate, 5500);
});
