import { IconType } from "react-icons";

export interface ILevel {
    id: number;
    title: string;
    cardDesc: string;
    url: string;
    description: string;
    range?: string;
    turns?: string;
    orientation?: string[];
    mainImg: string;
    images: {id: number; img: string}[];
};

export interface IActivity {
    id: number;
    title: string;
    url: string;
    description: string;
    sports?: string[];
    mainImg: string,
    images: {id: number; img: string}[];
};

export interface IGoal {
    id: number;
    title: string;
    description: string;
}

export interface IContact {
    id: number;
    title: string | string[];
    icon: IconType;
};