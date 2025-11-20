"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MusicPlaylistBar from "@/components/MusicPlaylistBar";
import BreadCrumb from "@/components/UI/Breadcrumb";
import SearchMusic from "@/components/UI/SearchMusic";
import UserProfile from "@/components/UI/UserProfile";
import NavbarOpen from "@/components/UI/NavbarOpen";
import "./styles.scss";
export default function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <main id="home-page">
      <div className="row gy-0 gx-2 ">
        <div className="col-12 col-lg-2">
          <div className={`${showNav ? "show-nav" : "hide-nav"}`}>
            <Sidebar setShowNav={setShowNav} />
          </div>
        </div>
        <div className="col-12 col-lg-10">
          <div className="row">
            <div className="col-12">
              <div className="hideonDesktop">
                <div className="row gy-1 gx-1">
                  <div className="col-2 col-sm-1">
                    <NavbarOpen setShowNav={setShowNav} />
                  </div>
                  <div className="col breakcumb-bar">
                    <div>
                      <BreadCrumb />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <SearchMusic />
                    </div>
                  </div>
                </div>
              </div>
              <div className="showonDesktop">
                <div className="row gy-0 gx-2">
                  <div className="col-12 col-md-3 col-lg-2">
                    <div>
                      <BreadCrumb />
                    </div>
                  </div>
                  <div className="col-10 col-md-7 col-lg-8">
                    <div>
                      <SearchMusic />
                    </div>
                  </div>

                  <div className="col-12 col-md-2 col-lg-2">
                    <UserProfile />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  gy-0 gx-2 mt-2">
            <div className="col-12 col-md-8 col-lg-10">
              <div>main</div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <div>
                <MusicPlaylistBar />
              </div>
            </div>
          </div>
          <div className="row gy-2 gx-2">
            <div className="col-12">Musing bar</div>
          </div>
        </div>
      </div>
    </main>
  );
}
