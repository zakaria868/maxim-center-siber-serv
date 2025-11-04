import React from 'react';
import ReviewItem from './ReviewItem';

const reviews = [
  {
    name: 'هالة عادل',
    date: '١٠-٠١',
    rating: 5,
    text: 'التقييم ممتاز! الخدمة رائعة والتوصيل سريع.',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'محمد أشرف',
    date: '١٠-٠١',
    rating: 5,
    text: 'جودة المنتج ممتازة والسعر مناسب جداً. شكراً لكم!',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: 'سمر الغامدي',
    date: '١٠-٠١',
    rating: 5,
    text: 'أعجبني التصميم وسهولة الاستخدام. سأكرر التجربة بالتأكيد.',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    name: 'عبدالله المالكي',
    date: '١٠-٠١',
    rating: 5,
    text: 'المنتج مطابق للوصف تماماً، والتغليف ممتاز.',
    avatar: 'https://i.pravatar.cc/40?img=4',
  },
];

const ReviewList = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
