export type BlogSection = {
  heading?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  icon: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-toss-matters-more-than-you-think',
    category: 'Cricket',
    icon: '🏏',
    title: 'The toss matters more than you think',
    excerpt: "A few of our regulars swear by this checklist before an IPL bet. I asked them to write it down so I'd stop hearing it secondhand.",
    image: '/blog/cricket.svg',
    readTime: '6 min read',
    sections: [
      { body: "Someone asks me for \"the system\" almost every season, like there's a spreadsheet locked in a drawer somewhere. There isn't. What there is, is a habit a handful of our sharper members have, and once I actually sat down and wrote it out, it turned out to be pretty simple." },
      { heading: 'Check the toss before the team sheet', body: "This is the one people skip. A captain choosing to bowl first at a ground known for evening dew is telling you something real. So is one batting first on a pitch that's already crumbling by day three of a tournament. Read the toss decision like it's a headline, because it kind of is." },
      { heading: 'Powerplay stats, not the season average', body: "A team's overall run rate can hide a lot. Some sides come out swinging in the first six overs and go quiet after. Others build slow and explode late. If you're only glancing at season averages, you're skipping the part of the match that decides most of these games." },
      { heading: 'Find the one match-up that matters', body: "Somewhere in a team's line-up is a batter who's historically struggled against a specific bowling style. It's usually worth five minutes of searching before you place anything — it tells you more than either team's overall form does." },
      { heading: 'Pick your bet size before the season, not during it', body: "Genuinely the least glamorous tip here, and also the one I'd bet actually matters most. Decide a number you're fine with, win or lose, and don't move it mid-season. Chasing a bad week with bigger bets is how good seasons turn forgettable." },
      { heading: "Give live odds a minute before you act", body: "Pre-match prices already know everything public. What they can't know is that today's pitch is playing flatter than the report suggested, or that a bowler's first over looked off. Watch the first few overs before you jump into a live market." },
      { body: "None of this is a guarantee — cricket has a habit of humbling anyone who thinks they've cracked it, myself included, more than once. But a bit of process beats a hunch, and if you need your ID sorted before the next toss, you know where to find us." },
    ],
  },
  {
    slug: 'i-timed-the-whole-signup',
    category: 'Guides',
    icon: '⚡',
    title: 'I timed the whole signup, out of curiosity',
    excerpt: "Someone asked how long it really takes, so one quiet Tuesday I set a stopwatch and messaged the account like a normal person would.",
    image: '/blog/id-setup.svg',
    readTime: '4 min read',
    sections: [
      { body: "We say \"under five minutes\" a lot, and I started wondering if that was actually true or just a number that sounded good. So I sat down, opened WhatsApp like any first-time user would, and timed it. Here's what happened, roughly minute by minute." },
      { heading: '0:00 — I say hi', body: "Sent a plain \"hi, I'd like to set up an ID\" and put the stopwatch down. Someone replied in under a minute, which honestly made me a little proud, given I work here." },
      { heading: '1:40 — the actual questions', body: "Name, which platform, roughly what I planned to deposit. Three questions. That's the entire form, and it exists purely in chat — no separate page to click through." },
      { heading: '3:15 — the ID lands', body: "It showed up right there in the same conversation, no email to go dig out of a spam folder. One login, and it opens cricket, football, casino, all of it." },
      { heading: '4:40 — deposit confirmed', body: "UPI, and the funds were reflected before I'd even put my phone back down. Four minutes and forty seconds, start to finish, and I wasn't even trying to be fast." },
      { body: "So the number holds up, at least on a normal Tuesday with no one else messaging in at the same time. Try it yourself and tell us if we're wrong — I'd genuinely like to know." },
    ],
  },
  {
    slug: 'the-truth-about-slow-withdrawals',
    category: 'Payments',
    icon: '💰',
    title: 'The truth about slow withdrawals',
    excerpt: 'Every platform in this space gets this complaint. Here is what is actually happening on the backend when a withdrawal takes forever — and why ours mostly doesn\'t.',
    image: '/blog/payments.svg',
    readTime: '5 min read',
    sections: [
      { body: "If you've used a different platform before landing here, there's a decent chance a withdrawal has sat there doing absolutely nothing for a day or two. I used to work adjacent to payments before this, so let me actually explain what's going on instead of just saying \"trust us.\"" },
      { heading: 'What happens the second you hit withdraw', body: "Your request gets checked against your account details, then routed out through whatever method you used to deposit. On a normal day that's minutes. On a chaotic match-finale day, maybe an hour or two, because everyone cashes out at once." },
      { heading: 'The methods that actually work well', body: "UPI, net banking, the usual wallets. UPI wins every time — it's rare for one to take more than fifteen minutes once it's been approved on our end." },
      { heading: 'What actually causes the delays', body: "Nine times out of ten, it's a mismatched account detail, or a request landing in that post-match rush. Double-check your details before you submit and you'll dodge almost every delay we've ever looked into." },
      { heading: 'On the security side', body: "Standard bank-level encryption, nothing stored in plain text. And if you're ever unsure where a withdrawal is, we can check it live — not \"give us 24-48 hours\" live, actually live." },
      { body: "If something ever feels slower than it should, don't just sit there refreshing the app. Message us. A person looks at it right away, not a queue." },
    ],
  },
  {
    slug: 'football-betting-for-people-new-to-it',
    category: 'Football',
    icon: '⚽',
    title: 'Football betting for people who are new to it',
    excerpt: 'A friend of mine asked me to explain this over chai last month. This is basically that conversation, written down.',
    image: '/blog/football.svg',
    readTime: '5 min read',
    sections: [
      { body: "A friend asked me to explain football betting terms last month, mostly because she was tired of nodding along without understanding half of what people were saying. This is roughly what I told her, minus the parts where I got distracted talking about the actual match." },
      { heading: 'Match winner — the obvious one', body: "Home win, draw, or away win. Nothing clever, and genuinely the best place to start before touching anything else." },
      { heading: 'Over/under goals', body: "Doesn't care who wins. It's about the total goals scored. A common line is 2.5 — you're betting on whether the final combined score lands above or below that." },
      { heading: 'Both teams to score', body: "Yes or no, will both sides find the net at some point. Doesn't matter who ends up winning the match." },
      { heading: 'Asian handicap', body: "Gives a virtual head start to the underdog, which is useful when there's a clearly stronger team — often better value than a plain match-winner bet in those games." },
      { heading: 'Correct score and accumulators', body: "The fun ones, and the riskiest. An accumulator needs every single leg to land, so the odds stack up fast — great when it works, rough when it doesn't." },
      { body: "She placed her first bet the next day. Match winner, nothing fancy. Start there, get a feel for it, then branch out whenever you're ready." },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
