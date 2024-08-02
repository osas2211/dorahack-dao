"use client"
import { Avatar, Button, Divider, Drawer, Input, Modal, Popover } from "antd"
import React, { useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { PiPlusFill } from "react-icons/pi"
import { SideNav } from "./SideNav"
import { Footer } from "antd/es/layout/layout"
import { CgClose } from "react-icons/cg"

export const MobileHeader = () => {
  const [openNavDrawer, setOpenNavDrawer] = useState(false)
  const [openSearchModal, setOpenSearchModal] = useState(false)
  const toggleSearchModal = () => setOpenSearchModal(!openSearchModal)

  const toggleNavDrawer = () => setOpenNavDrawer(!openNavDrawer)

  return (
    <div className="fixed top-0 left-[0] w-full z-[20] bg-surface dark:bg-surface-dark py-[12px] px-[16px]">
      <header className="h-[60px] flex justify-between items-center rounded-md md:hidden bg-surface-container dark:bg-surface-container-dark p-[16px] text-on-surface-variant dark:text-on-surface-variant-dark">
        <div>
          <GiHamburgerMenu className="text-xl" onClick={toggleNavDrawer} />
        </div>
        <div onClick={toggleSearchModal} className="cursor-pointer">
          <p className="text-[16px]">Search for a proposals</p>
        </div>
        <Popover
          placement={"bottomLeft"}
          showArrow={false}
          arrow={false}
          trigger={"click"}
          content={<CreateOption />}
        >
          <Avatar
            className="font-semibold rounded-full bg-primary dark:bg-primary-dark cursor-pointer"
            size={45}
          >
            <PiPlusFill className="text-xl" />
          </Avatar>
        </Popover>
      </header>
      <div className="md:hidden block relative">
        <Drawer
          width={300}
          open={openNavDrawer}
          onClose={toggleNavDrawer}
          footer={null}
          styles={{ body: { padding: 0 }, header: { display: "none" } }}
          placement="left"
        >
          <SideNav />
          <div className="absolute top-[1.8rem] right-[1rem]">
            <CgClose className="text-2xl" onClick={toggleNavDrawer} />
          </div>
        </Drawer>
      </div>
      <div className="md:hidden block relative">
        <Modal
          width={"90vw"}
          open={openSearchModal}
          onCancel={toggleSearchModal}
          footer={null}
          styles={{
            content: { padding: 0 },
          }}
          title={<p className="text-xl p-[16px]">Search</p>}
        >
          <Divider className="my-0" />
          <div className="p-[16px]">
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark text-[16px] mb-5">
              Search for proposals
            </p>
            <Input size="large" className="w-full" autoFocus={true} />
          </div>
          <Divider className="my-0" />
          <div className="p-[16px]">
            <Button className="w-full" size="large" type="primary">
              Search
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

const CreateOption = () => {
  return (
    <div className="w-[220px] text-[14px]">
      <div>
        <Link
          className="p-[8px] hover:text-on-surface dark:hover:text-on-surface-dark hover:bg-surface-container dark:hover:bg-surface-container-dark py-2 block rounded-md"
          href={"/create/requests"}
        >
          Requests
        </Link>
      </div>
      <div>
        <Link
          className="p-[8px] hover:text-on-surface dark:hover:text-on-surface-dark hover:bg-surface-container dark:hover:bg-surface-container-dark py-2 block rounded-md"
          href={"/create/purchase-order"}
        >
          (PO) Purchase order
        </Link>
      </div>
      <div>
        <Link
          className="p-[8px] hover:text-on-surface dark:hover:text-on-surface-dark hover:bg-surface-container dark:hover:bg-surface-container-dark py-2 block rounded-md"
          href={"/create/request-for-quotations"}
        >
          (RFQ) Request for quotations
        </Link>
      </div>
      <div>
        <Link
          className="p-[8px] hover:text-on-surface dark:hover:text-on-surface-dark hover:bg-surface-container dark:hover:bg-surface-container-dark py-2 block rounded-md"
          href={"/create/request-for-proposals"}
        >
          (RFP) Request for proposals
        </Link>
      </div>
      <div>
        <Link
          className="p-[8px] hover:text-on-surface dark:hover:text-on-surface-dark hover:bg-surface-container dark:hover:bg-surface-container-dark py-2 block rounded-md"
          href={"/create/workflow"}
        >
          Create Workflow
        </Link>
      </div>
    </div>
  )
}
