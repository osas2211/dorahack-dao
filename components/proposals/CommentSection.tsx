"use client"
import { Avatar, Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React from "react"
import { BiUser } from "react-icons/bi"
const comments = [
  {
    username: "John Doe",
    avatar:
      "https://dub1.discourse-cdn.com/business20/user_avatar/forum.decentraland.org/hprivakos/48/20568_2.png",
    comment: ` Captcha are useful, but considering current DCL state I don't
              know if that's really what we need the most right now.
              I'd love for you to work on a DCL project, but I don't
              think this is the one, it's relatively costly for something
              which is not really needed at the moment.`,
  },
  {
    username: "Bruce Wayne",
    avatar:
      "https://dub1.discourse-cdn.com/business20/user_avatar/forum.decentraland.org/pablo/48/29530_2.png",
    comment: ` Captcha are useful, but considering current DCL state I don't
              know if that's really what we need the most right now.
              I'd love for you to work on a DCL project, but I don't
              think this is the one, it's relatively costly for something
              which is not really needed at the moment.`,
  },
  {
    username: "Stone cold",
    avatar: "https://forum.decentraland.org/u/ArtReYou",
    comment: ` Captcha are useful, but considering current DCL state I don't
              know if that's really what we need the most right now.
              I'd love for you to work on a DCL project, but I don't
              think this is the one, it's relatively costly for something
              which is not really needed at the moment.`,
  },
]

export const CommentSection = () => {
  const [form] = useForm<{ comment: string }>()
  return (
    <div className="text-sm">
      <p className="font-semibold">Comments (33)</p>
      <div className="my-5 md:w-[500px] w-full">
        <Form form={form} layout="vertical">
          <Form.Item
            name={"comment"}
            label={"Comment on this proposal"}
            className="my-2"
          >
            <Input.TextArea className="bg-transparent border-outline-variant dark:border-outline-variant-dark" />
          </Form.Item>
          <Button type="primary">
            <p className="text-sm">Submit</p>
          </Button>
        </Form>
      </div>

      <div className="space-y-2">
        {comments.map((comment, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <Avatar
                src={comment.avatar}
                className="bg-secondary/20 dark:bg-secondary-dark/20"
              >
                <BiUser className="text-secondary dark:text-secondary-dark" />
              </Avatar>
              <div className="md:w-[80%] w-[90%]">
                <p className="font-semibold">{comment.username}</p>
                <p className="leading-snug text-[13px]">{comment.comment}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
