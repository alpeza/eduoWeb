import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

import { getStrapiURL } from "../lib/api";

export default function Testimonials(p) {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

      {p.content.map(function(c, i){
        return (
                  <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-tca1 px-14 rounded-2xl py-14 dark:bg-tcc10">
            <p className="text-2xl leading-normal ">
              {c.Text}
            </p>

            <Avatar
              image={getStrapiURL(c.Image.data[0].attributes.url)}
              name={c.SubTitle}
              title={c.Description}
            />
          </div>
        </div>
        );
        })}

      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          //placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-tcb4 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-tcb8 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
