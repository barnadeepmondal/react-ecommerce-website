const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our E-Commerce</h1>
      
      {/* Decorative Line */}
      <div className="w-20 h-1 bg-pink-600 mb-8"></div>

      {/* Paragraphs of Lorem Ipsum */}
      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci 
          a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec 
          luctus magna felis sollicitudin mauris.
        </p>

        <p>
          Integer in sapien. Vivamus egestas ut erat sed ultricies. Nam vel maximus erat. 
          Aenean ac varius lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ut condimentum diam, tempor pretium velit.
        </p>
      </div>
    </div>
  )
}

export default About;