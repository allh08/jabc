import React from 'react';
import ActivityCard from '../components/ActivityCard';

export default function Home() {

  return (
    <React.Fragment>
    <ActivityCard
      title="Career Clustering"
      imageSrc="card1.png"
      link="/career/start"
      description="In this course you will go on a bit of a journey of self-discovery. It begins with an activity meant to help categorize your interests, skills, strengths and passions."
    />

    </React.Fragment>
  );
}
