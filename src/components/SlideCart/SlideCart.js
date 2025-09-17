import React from 'react';

const SideCart = () => {
  const steps = [
    { number: 4, label: 'تقييم المنتج', completed: false },
    { number: 3, label: 'الدفع', completed: false },
    { number: 2, label: 'معلومات الشحن', completed: false },
    { number: 1, label: 'السلة', completed: true }
  ];

  return (
    
    <div className="w-full max-w-4xl mx-auto p-8" dir="rtl">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle and Label */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 ${
                  step.completed
                    ? 'bg-gray-800'
                    : 'bg-gray-400'
                }`}
              >
                {step.number}
              </div>
              <span
                className={`text-sm font-medium ${
                  step.completed ? 'text-gray-800' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
            
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-px bg-gray-300 mx-4 relative top-[-20px]">
                <div className="w-full h-full border-t-2 border-dashed border-gray-300"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
    
  );
};

export default SideCart;