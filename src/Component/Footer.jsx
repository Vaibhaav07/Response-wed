import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Your Company</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          <div>
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88C24 21.35 23.35 22 22.44 22H1.56C.65 22 0 21.35 0 20.44V3.56C0 2.65.65 2 1.56 2H22.44C23.35 2 24 2.65 24 3.56zM7.2 19.14h3.24V9.61H7.2v9.53zM8.82 8.27a1.85 1.85 0 0 1-1.85-1.84 1.85 1.85 0 1 1 3.69 0c0 1.02-.82 1.84-1.84 1.84zm12.68 10.87h3.24v-5.11c0-2.89-3.36-2.67-3.36 0v5.11zm-1.62-6.86c1.67 0 2.68-1.38 2.68-3.06a2.84 2.84 0 0 0-2.83-2.83c-1.61 0-2.68 1.35-2.68 3.06a2.84 2.84 0 0 0 2.83 2.83z" />
            </svg>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.39 3.55 8.04 8.24 8.93v-6.3H7.9v-2.63h2.37v-2.02c0-2.36 1.41-3.65 3.54-3.65.98 0 1.84.07 2.08.1v2.42h-1.43c-1.12 0-1.34.53-1.34 1.31v1.72h2.67l-.34 2.63h-2.33V21c4.7-.89 8.24-4.54 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.39 3.55 8.04 8.24 8.93v-6.3H7.9v-2.63h2.37v-2.02c0-2.36 1.41-3.65 3.54-3.65.98 0 1.84.07 2.08.1v2.42h-1.43c-1.12 0-1.34.53-1.34 1.31v1.72h2.67l-.34 2.63h-2.33V21c4.7-.89 8.24-4.54 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
