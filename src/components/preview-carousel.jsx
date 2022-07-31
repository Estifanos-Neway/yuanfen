import Flicking from '@egjs/react-flicking';
import React, { useState } from 'react'

export default function PreviewCarousel({ items, builder, previewBuilder, initIndex = 0, className="" }) {
  const [currentIndex, setCurrentIndex] = useState(initIndex < items.length ? initIndex : 0);
  return (
    <div className={className}>
      <div>
        {
          builder(items[currentIndex])
        }
      </div>
      <div>
        <Flicking className="overflow-visible" bound={true} bounce={0} align="center">
          {
            items.map((item, index) =>
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="flicking-panel"
              >
                {previewBuilder({ item, index, isCurrent: index == currentIndex })}
              </div>)
          }
        </Flicking>
      </div>
    </div>
  )
}
