import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BlogPostSummary} from "@/types/blog-post-summary.interface";
import {Badge} from "@/app/_components/badge";
import {IconCalendar, IconClock, IconComment, IconEye, IconUserProfile} from "@/app/_components/icons";

export type BlogPostCardProps = BlogPostSummary & {};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
                                                            title,
                                                            thumbnailUrl,
                                                            studyTime,
                                                            author,
                                                            postDate,
                                                            numberOfViews,
                                                            numberOfComments,
                                                            isNew,
                                                            slug
                                                          }) => {
  return (
    <div className="card">
      {
        isNew && <Badge variant="ghost" size="small" className="absolute right-2 top-2 !opacity-100">جدید</Badge>
      }
      <figure>
        <Image src={thumbnailUrl} alt={title} width={550} height={327}/>
      </figure>
      <div className="card-body">
        <Link href={`/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>

        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16}/>
            {author}
          </Badge>
          <Badge variant="neutral">
            <IconCalendar width={16} height={16}/>
            {postDate}
          </Badge>
        </div>
      </div>

      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="warning">
            <IconEye width={16} height={16}/>
            {numberOfViews}
          </Badge>
          <Badge variant="accent">
            <IconComment width={16} height={16}/>
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          <IconClock width={16} height={16}/>
          زمان مطالعه : {studyTime} دقیقه
        </span>
      </div>
    </div>
  );
};