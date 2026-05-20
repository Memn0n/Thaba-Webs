'use client';

import React, { useEffect } from 'react';

const ElfSightWhatsAppChat: React.FC = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    // Set the source attribute to the ElfSight platform script URL
    script.src = 'https://elfsightcdn.com/platform.js';
    // Set the attributes for deferred loading and using service core
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    // Append the script element to the body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Return the container div for the WhatsApp chatbox
  return (
    <div
      className='elfsight-app-80a464ab-9862-476d-b492-626f181eba42'
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfSightWhatsAppChat;
