import React from 'react'

const Faq = () => {
  return (
    <div className="px-4">
    <div className="collapse collapse-plus bg-base-200 mb-3">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
        <p>hello</p>
    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 mb-3">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
        <p>hello</p>
    </div>
    </div>
    <div className="collapse collapse-plus bg-base-200 mb-3">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
        <p>hello</p>
    </div>
    </div>
    </div>
  )
}

export default Faq