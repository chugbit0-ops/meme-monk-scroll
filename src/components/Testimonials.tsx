
const Testimonials = () => {
  const comments = [
    {
      username: "scrollmaster99",
      text: "This hoodie literally made me stop doomscrolling... for like 5 minutes. 10/10 would buy again 🙏",
      likes: "2.3k",
      timeAgo: "3 days ago"
    },
    {
      username: "memepriest",
      text: "I wore this to church and the pastor asked where I got it. Now he's asking for a bulk discount 😭",
      likes: "5.7k",
      timeAgo: "1 week ago"
    },
    {
      username: "algorithmic_angel",
      text: "The quality is actually insane. Plus I feel spiritually connected to my For You page now",
      likes: "892",
      timeAgo: "2 weeks ago"
    },
    {
      username: "blessed_scroller",
      text: "Ordered the tote bag and now I carry my phone, charger, AND inner peace. Revolutionary.",
      likes: "1.1k",
      timeAgo: "5 days ago"
    }
  ];

  return (
    <section id="testimonials" className="section-monastery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-blessed mb-6">What the Comments Section Says</h2>
          <p className="text-prayer text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from real enlightened scrollers. No bots, we promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {comments.map((comment, index) => (
            <div 
              key={index}
              className="comment-bubble p-6 rounded-lg scroll-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-divine rounded-full flex items-center justify-center text-xs font-semibold">
                  {comment.username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-inter font-semibold text-sm">@{comment.username}</span>
                    <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                  </div>
                  <p className="text-scroll mb-3">{comment.text}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>👍 {comment.likes}</span>
                    <span>💬 Reply</span>
                    <span>🙏 Blessed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
