import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'rajveer____r_t1234_akdi',
    beforeFollowers: '323 followers',
    afterFollowers: '10.3K followers',
    beforePosts: '100 posts',
    afterPosts: '100 posts',
    beforeFollowing: '4,545 following',
    afterFollowing: '4,545 following',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'd_e_v_r_a_j__l_o_v_e',
    beforeFollowers: '491 followers',
    afterFollowers: '10.6K followers',
    beforePosts: '5 posts',
    afterPosts: '5 posts',
    beforeFollowing: '1,198 following',
    afterFollowing: '1,198 following',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'priya_lifestyle_blog',
    beforeFollowers: '1,245 followers',
    afterFollowers: '51.2K followers',
    beforePosts: '89 posts',
    afterPosts: '89 posts',
    beforeFollowing: '2,156 following',
    afterFollowing: '2,156 following',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'fitness_with_arjun',
    beforeFollowers: '892 followers',
    afterFollowers: '20.9K followers',
    beforePosts: '234 posts',
    afterPosts: '234 posts',
    beforeFollowing: '1,567 following',
    afterFollowing: '1,567 following',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the amazing transformation our clients experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`p-8 rounded-2xl ${index % 2 === 0 ? 'bg-green-50' : index % 3 === 1 ? 'bg-blue-50' : 'bg-purple-50'}`}>
              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-black text-white text-center py-2 px-4 rounded-lg mb-4">
                    <span className="text-sm font-semibold">Before</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.beforePosts} • {testimonial.beforeFollowers}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-600">👥 {testimonial.beforeFollowing}</span>
                  </div>
                </div>

                {/* After */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-black text-white text-center py-2 px-4 rounded-lg mb-4">
                    <span className="text-sm font-semibold">Payment के बाद</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.afterPosts} • {testimonial.afterFollowers}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-600">👥 {testimonial.afterFollowing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Notification */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-gray-900">Rajesh Kumar</span>
                <span className="text-sm text-gray-500">from Amritsar</span>
                <button className="text-gray-400 hover:text-gray-600">×</button>
              </div>
              <p className="text-green-600 font-medium">Just purchased 100K Followers</p>
              <p className="text-xs text-gray-500">4 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;