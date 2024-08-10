import React, { useState } from "react"
import {
  Avatar,
  Button,
  Divider,
  Modal,
  Popover,
  Space,
  Table,
  Tag,
} from "antd"
import type { TableProps } from "antd"
import { BiDotsVertical } from "react-icons/bi"
import { CiEdit } from "react-icons/ci"
import moment from "moment"
import { Status } from "./Status"
import { BsEye } from "react-icons/bs"
import { BsTrash } from "react-icons/bs"
import { ProposalI } from "@/interface/proposals"
import Link from "next/link"

const columns: TableProps<ProposalI>["columns"] = [
  {
    title: "Submitted by",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Link href={`/proposals/${record.id}`}>
        <div className="flex gap-2 text-on-surface dark:text-on-surface-dark">
          <div>
            <Avatar
              size={42}
              src={record.picture}
              className="bg-tertiary-container text-primary"
            >
              <span>{record.name[0]}</span>
            </Avatar>
          </div>
          <div>
            <p className="font-semibold leading-snug">{record.name}</p>
            <p className="text-[11px] leading-snug">{record.theme}</p>
            <p className="text-[11px] leading-snug">
              {moment(record.date_submitted).format("LL")}
            </p>
          </div>
        </div>
      </Link>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => {
      return (
        <Link href={`/proposals/${record.id}`}>
          <p className="font-medium text-on-surface dark:text-on-surface-dark">
            {record.title}
          </p>
        </Link>
      )
    },
  },
  {
    title: "Proposal Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      return (
        <Link href={`/proposals/${record.id}`}>
          <div className="text-on-surface dark:text-on-surface-dark">
            <Status type={record.status} />
          </div>
        </Link>
      )
    },
  },
  {
    title: "End date",
    key: "tags",
    dataIndex: "tags",
    render: (value, record) => {
      return (
        <Link href={`/proposals/${record.id}`}>
          <p className="font-medium text-on-surface dark:text-on-surface-dark">
            {moment(record.end_date).format("LL")}
          </p>
        </Link>
      )
    },
  },

  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Popover
        trigger={"click"}
        arrow={false}
        placement="bottomLeft"
        content={
          <div className="w-[142px]">
            <Button
              icon={<BsEye size={22} />}
              className="w-full justify-start h-[40px] bg-transparent border-0 text-[14px] font-medium"
              type="text"
            >
              View details
            </Button>
            <Button
              icon={<CiEdit size={22} />}
              className="w-full justify-start h-[40px] bg-transparent border-0 text-[14px] font-medium"
              type="text"
            >
              Edit
            </Button>
            <Divider className="my-0 bg-outline-variant dark:bg-outline-variant-dark" />
            <DeleteRequest id={record.id} />
          </div>
        }
      >
        <Space size="middle" className="cursor-pointer px-0">
          <BiDotsVertical
            size={20}
            className="text-on-surface-variant dark:text-on-surface-variant-dark"
          />
        </Space>
      </Popover>
    ),
  },
]

export const ProposalsTable = ({ data }: { data: ProposalI[] }) => {
  return (
    <div className="w-[92vw] mx-auto xl:w-auto md:mt-0 mt-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1125 }}
        // className="no-scrollbar"
      />
    </div>
  )
}

const DeleteRequest = ({ id }: { id: string }) => {
  const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal)
  return (
    <>
      <Modal
        open={openModal}
        footer={null}
        title={<p className="text-[22px] font-normal">Delete request</p>}
        onCancel={toggleModal}
        classNames={{ content: "p-0", header: "text-[22px]" }}
        styles={{
          content: {
            padding: 0,
            maxWidth: 349,
            marginLeft: "auto",
            marginRight: "auto",
          },
          header: { padding: "20px 20px" },
        }}
      >
        <Divider className="my-0 -mt-2 bg-outline-variant dark:bg-outline-variant-dark" />
        <div className="p-[20px]">
          <p>
            If you delete this request, you won&apos;t be able to recover it.
            Are you sure about this?
          </p>
        </div>
        <Divider className="my-0 bg-outline-variant dark:bg-outline-variant-dark" />
        <div className="p-[20px] flex gap-3 items-center">
          <button className="bg-error dark:bg-error-dark h-[44px] w-[119px] text-white rounded-lg">
            Yes, delete
          </button>
          <Button
            className="start h-[44px] bg-transparent border-0 text-[14px] font-extrabold"
            onClick={toggleModal}
            type="text"
          >
            <span className="font-extrabold"> No, don&apos;t delete</span>
          </Button>
        </div>
      </Modal>
      <Button
        icon={<BsTrash size={22} />}
        className="w-full justify-start h-[40px] bg-transparent border-0 text-[14px] font-medium"
        type="text"
        danger
        onClick={toggleModal}
      >
        Delete
      </Button>
    </>
  )
}
