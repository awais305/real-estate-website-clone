import React from "react";
import "./PropertyListItem.scss";
import { AssetPath } from "../../Utils/Constants";

const PropertyListItem = () => {
  return (
    <div className="property_list_item">
      <div className="image_container">
        <img className="image" src={"/temp/featured1.png"} alt="" />
        <div className="favorite_icon" />
        <div className="icon_container">
          <img src="/photos.png" alt="" className="icon" />
          <p className="count">23</p>
        </div>
      </div>
      <h1 className="title">Gorgeous Apartment Building</h1>
      <div className="address_container">
        <svg
          viewBox="0 0 15 21"
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.556 5.554C13.9867 3.75028 12.8955 2.32628 11.235 1.37695C9.57448 0.38016 7.77164 0.0953641 5.87391 0.522562C4.30829 0.902294 3.02733 1.75669 1.98358 2.99081C1.1296 3.98761 0.607726 5.17427 0.417953 6.50333C0.323067 7.21533 0.275624 7.97479 0.417953 8.68679C0.655169 9.96838 1.17704 11.1076 1.88869 12.1993C3.40687 14.5252 4.97249 16.851 6.49067 19.1769C6.72789 19.5566 6.96511 19.9363 7.39209 20.1262C7.53442 20.1262 7.62931 20.1262 7.77164 20.1262C8.15118 20.0313 8.3884 19.7465 8.57817 19.4142C9.76425 17.563 10.9978 15.7593 12.1838 13.9081C12.8481 12.9113 13.5123 12.0094 14.0341 10.9177C14.5086 9.92091 14.8407 8.87665 14.8407 7.78493C14.8881 7.02546 14.7458 6.266 14.556 5.554ZM13.6071 9.63612C13.3699 10.3481 12.9904 11.0126 12.6108 11.6297C10.9978 14.098 9.3847 16.5662 7.77164 18.987C7.62931 19.2243 7.62931 19.2243 7.43954 18.987C6.49067 17.5155 5.49437 16.0441 4.54551 14.5726C3.73897 13.3385 2.885 12.1518 2.17335 10.9177C1.60403 9.92091 1.22449 8.82919 1.22449 7.64253C1.17704 6.50333 1.4617 5.45907 2.03102 4.46228C2.74267 3.22815 3.73897 2.32629 5.01994 1.70922C5.68414 1.42442 6.39579 1.28202 7.20232 1.23456C7.43954 1.23456 7.62931 1.18709 7.81908 1.23456C10.4285 1.32949 12.8006 3.03828 13.6546 5.60147C14.129 6.93053 14.0816 8.30706 13.6071 9.63612Z"
            fill="var(--primary)"
          />
          <path
            d="M7.5343 3.75049C5.39936 3.75049 3.69141 5.45928 3.69141 7.59527C3.69141 9.73126 5.39936 11.4401 7.5343 11.4401C9.66924 11.4401 11.3772 9.68379 11.3772 7.59527C11.4246 5.45928 9.66924 3.75049 7.5343 3.75049ZM7.58174 10.6331C5.96868 10.6331 4.59283 9.2566 4.59283 7.64274C4.59283 5.98141 5.92123 4.65235 7.58174 4.65235C9.24225 4.65235 10.5707 5.98141 10.5707 7.64274C10.5707 9.2566 9.19481 10.6331 7.58174 10.6331Z"
            fill="var(--primary)"
          />
        </svg>

        <p className="address">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
      <h1 className="price">$7,500</h1>
      <div className="overview_row">
        <div className="inside_overview">
          <img src={AssetPath.bedsIcon} alt="" className="item_icon" />
          <p className="item_name">3 Beds</p>
        </div>
        <div className="inside_overview">
          <img src={AssetPath.bathroomIcon} alt="" className="item_icon" />
          <p className="item_name">2 Bath</p>
        </div>
        <div className="inside_overview">
          <img src={AssetPath.areaIcon} alt="" className="item_icon" />
          <p className="item_name">2,563 SQFT</p>
        </div>
      </div>
      <div className="name_type_row">
        <div className="name_wrapper">
          <img src={AssetPath.profilePicture} alt="" className="dp_icon" />
          <p className="name">Isabella Knight</p>
        </div>
        <div className="type_wrapper">
          <img src={AssetPath.homeIcon} alt="" className="type_icon" />
          <p className="type">Single Family</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
