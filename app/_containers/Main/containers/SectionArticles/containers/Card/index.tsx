import cx from "clsx";
import Image from "next/image";
import Link from "next/link";
import placeholder from "./assets/placeholder.svg";
import styles from "./index.module.scss";
import Flex from "@/modules/app-ui/Flex";
import { Post } from "@/modules/business-types";
import { httpGet$GetCategory } from "@/modules/commands/GetCategory/fetcher";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
};

export default async function Card({ className, style, post }: Props) {
  
}



