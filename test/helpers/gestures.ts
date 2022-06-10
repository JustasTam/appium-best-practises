const swipe = async (
  from: {x: number; y: number},
  to: {x: number; y: number},
) => {
  await driver.performActions([
    {
      // a. Create the event
      type: 'pointer',
      id: 'finger1',
      parameters: {pointerType: 'touch'},
      actions: [
        // b. Move finger into start position
        {type: 'pointerMove', duration: 0, x: from.x, y: from.y},
        // c. Finger comes down into contact with screen
        {type: 'pointerDown', button: 0},
        // d. Pause for a little bit
        {type: 'pause', duration: 100},
        // e. Finger moves to end position
        //    We move our finger from the center of the element to the
        //    starting position of the element
        {type: 'pointerMove', duration: 1000, x: to.x, y: to.y},
        // f. Finger lets up, off the screen
        {type: 'pointerUp', button: 0},
      ],
    },
  ]);
  await driver.pause(2000);
};
const findElementBySwipe = async ({
  element,
  maxScrolls = 5,
  scrollableElement,
  scrollUp = false,
}: {
  element: WebdriverIO.Element;
  maxScrolls?: number;
  scrollableElement: WebdriverIO.Element;
  scrollUp?: boolean;
}): Promise<WebdriverIO.Element | undefined> => {
  for (let i = 0; i < maxScrolls; i++) {
    if (await element.isDisplayed()) {
      return element;
    }

    const {x, y, height, width} = await driver.getElementRect(
      scrollableElement.elementId,
    );
    const centerX = x + width / 2;
    const yStart = y + height * 0.9;
    const yEnd = y + height * 0.1;
    // Swipe
    if (scrollUp) {
      // It's the reverse
      await swipe({x: centerX, y: yEnd}, {x: centerX, y: yStart});
    } else {
      await swipe({x: centerX, y: yStart}, {x: centerX, y: yEnd});
    }
  }
};

const swipeTo = async (direction : string) => {
  const displaySize = await driver.getWindowSize();
  console.log('Display size' + displaySize);
  const edgeBorder = 50;
  
  switch (direction) {
    case 'UP':  // center of header
      await swipe({x: displaySize.width/2, y: displaySize.height/2}, {x: displaySize.width/2, y: edgeBorder});
      console.log('Scrolling up');
      break;
    case 'DOWN':  // center of footer
      await swipe({x: displaySize.width/2, y: displaySize.height/2}, {x: displaySize.width/2, y: displaySize.height-edgeBorder});
      console.log('Scrolling down');
      break;  
    case 'LEFT':  // center of left side
      await swipe({x: displaySize.width/2, y: displaySize.height/2}, {x: edgeBorder, y: displaySize.height/2});
      console.log('Scrolling left');
      break; 
    case 'RIGHT':  // center of right side
      await swipe({x: displaySize.width/2, y: displaySize.height/2}, {x: displaySize.width-edgeBorder, y: edgeBorder});
      console.log('Scrolling right');
      break;  
    default:
      console.log(`No such direction`);
  }
};

export {findElementBySwipe, swipe, swipeTo};
