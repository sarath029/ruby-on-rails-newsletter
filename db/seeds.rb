# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
users = User.create([
    {
        "name": "vinit.kt",
        "id": "4001011544207",
        "user_type": "ENDUSER"
    }, {
        "name": "Kevin Paylow",
        "id": "4004787938207",
        "user_type": "ENDUSER"
    }, {
        "name": "delano",
        "id": "4004590176651",
        "user_type": "ENDUSER"
    }, {
        "name": "Naveen Arasu",
        "id": "4001008999835",
        "user_type": "ENDUSER"
    }, {
        "name": "Vinit Tibrewal",
        "id": "4001417819449",
        "user_type": "SUPPORTREP"
    }, {
        "name": "Jennifer Lauren Mayfield",
        "id": "4004726105762",
        "user_type": "ENDUSER"
    },
    {
        "name": "Naresh Naresh",
        "id": "4002176701569",
        "user_type": "ENDUSER"
    }, {
        "name": "rohith.k",
        "id": "4001872635307",
        "user_type": "ENDUSER"
    }, {
        "name": "Anish Mathew",
        "id": "4000103918626",
        "user_type": "SUPPORTREP"
    },
    {
        "name": "Sushmitha B",
        "id": "4000881426378",
        "user_type": "SUPPORTREP"
    },
    {
        "name": "janaki shantharam",
        "id": "4002398734469",
        "user_type": "ENDUSER"
    },
    {
        "name": "Johnson Johnson",
        "id": "4001007978099",
        "user_type": "ENDUSER"
    },
    {
        "name": "Sharanya",
        "id": "4001018010793",
        "user_type": "ENDUSER"
    },
    {
        "name": "Anjanaa Santhanam",
        "id": "4001417789488",
        "user_type": "SUPPORTREP"
    },
    {
        "name": "Shreyasee Ghosh",
        "id": "4001062250700",
        "user_type": "SUPPORTREP"
    }
])

topics = Topic.create([
    {
        "id": "2266000012354098",
        "subject": "Once Upon a Sales Meeting!",
        "content": "It was an awkward silence in the meeting room \"Uproar.\" John Kowalski, the new sales manager, was not happy with the team's performance. After scribbling something in the notepad, he decided to break the silence, John: I cannot believe you guys have been",
        "creator_id": "4001417819449",
        "status": "PUBLISHED",
        "label": "NOSTATUS",
        "permalink": "once-upon-a-sales-meeting",
        "topic_type": "DISCUSSION"
    }
])

comments = Comment.create([
    {
        "id": "2266000012289065",
        "topic_id": "2266000012354098",
        "status": "PUBLISHED",
        "content": "We shifted from delivering face-to-face training or consulting events to 100% remote events. We are putting in a lot of effort into increasing engagement to get as close to a live event as possible and deliver a great experience.<br /><br />Our marketing and sales strategy hasn&#39;t changed significantly. But because the market has changed, we&#39;ve had a big bump in sales.",
        "creator_id": "4004787938207"
    }, {
        "id": "2266000012277245",
        "topic_id": "2266000012354098",
        "status": "PUBLISHED",
        "content": "@Daleno, Thank you for your reply.<br /><br />We are here to assist you with setting up your email marketing campaigns, follow ups etc.,<br /><br />For any assistance, drop a mail.",
        "creator_id": "4001008999835", 
    }, {
        "id": "2266000012282314",
        "topic_id": "2266000012354098",
        "status": "PUBLISHED",
        "content": "a) How are you adapting to the new consumer behaviour?<br /><br />With the new normal, I have been working to adapt my marketing efforts for more online activity. Sending out more email campaigns, using  campaigns, Pagesense, and as many apps that can give me the best feedback as to what is working and what to improve.<br />b) What is your sales and marketing strategy in the post Covid-19 world?<br /><br />Better email campaigns, more marketing lists, better follow ups, and more data analysis.",
        "creator_id": "4004590176651"
    }, {
        "id": "2266000012269559",
        "topic_id": "2266000012354098",
        "status": "PUBLISHED",
        "content": "My company, PrimeVOX Communications, is embracing these virtual changes. We are a VoIP Telephone provider. We have an option that is included with our basic business package that consists of access to an application for your mobile device that mirrors your extension on your business phone. You can make calls from your business extension from your cell, as well. This allows for more businesses to embrace the work from home mentality, seamlessly. You have all the capabilities of your business phone in the palm of your hand!<br />Check voicemails: Check<br />Transfer calls: Check<br />See who is talking on their phone: Check<br />Conference lines: Check<br />Plus more!<br /><br />We are embracing the work-from-home mentality that is sweeping the country, with open arms.<br /><br />The Future is Calling... Are You Ready?<br /><br />Lauren Mayfield<br />Primevox Communications<br />972-600-1150 ext 407",
        "creator_id": "4004726105762",
    }
])