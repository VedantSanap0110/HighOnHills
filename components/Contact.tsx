import React from "react";
import CommentReplyCard from "./animata/card/comment-reply-card";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">
        Contact Us
      </h2>
      <CommentReplyCard
        initialComments={[
          {
            avatarColor: "#e8824b",
            id: 1,
            text: [
              "📞 For any inquiries feel free to contact the organizing committee:",
              "• Vedant Sanap: 8779784305",
              "• Yash Darade : 8788248742",
              "• Sarthak Harade: 9892311118",
              "• Ayush Duseja : 8010971051",
            ],
            time: "Last updated 13 hours ago",
            user: "Organizing Team",
          },
        ]}
      />
    </div>
  );
}

export default Contact;
