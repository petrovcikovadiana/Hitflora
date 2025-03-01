import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import axios from "axios";
import Pagination from "./Pagination"; // Import pagination component

function News() {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Watching the current page
  const postsPerPage = 5; // Set number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const tenantId = "5f62d984506f2792";
        const response = await axios.get(
          `https://eclipse.cloudylake.io/api/v1/tenants/${tenantId}/posts?sort=date&order=desc`
        );
        const data = response.data;
        setPosts(data.data.posts);
        const urls = data.data.posts.map(
          (post) => `https://eclipse.cloudylake.io/img/posts/${post.imageName}`
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 5 posts

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://hitflora.cz/aktualne" />
        <meta name="robots" content="index, follow" />
        <title>Aktuálně</title>
        <meta
          name="description"
          content="Zůstaňte v obraze s našimi aktuálními událostmi, novinkami a speciálními nabídkami v našem zahradnictví."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="flex">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="pt-24 xl:px-80 xl:items-start xl:text-start text-center items-center">
                <h1 className="font-bold text-black uppercase text-2xl">
                  Aktuálně
                </h1>
                <h1 className="font-bold text-headerGreen uppercase text-2xl">
                  u nás
                </h1>
                <hr className="h-px w-24 my-4 bg-lineGrey border-0 opacity-100 mx-auto xl:mx-0" />
              </div>
              <div className="pt-10 md:pt-0 mb-16 px-10 md:px-0">
                {currentPosts.map((post, index) => (
                  <div key={index}>
                    <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto md:my-10 pb-10 md:pb-0">
                      <img
                        src={imageUrls[index]}
                        alt={post.title}
                        className="block object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
                        loading="lazy"
                      />
                      <div className="md:w-1/3">
                        <h5 className="text-logoRed text-sm pb-2 font-bold">
                          {format(new Date(post.date), "d MMMM yyyy", {
                            locale: cs,
                          })}
                        </h5>
                        <h3 className="text-headerGreen text-2xl pb-5">
                          {post.title}
                        </h3>
                        <h3 className="md:text-start text-sm tracking-wide">
                          {post.description}
                        </h3>
                        <hr className="md:hidden h-px w-44 my-4 bg-lineGrey border-0 opacity-100 mx-auto xl:mx-0" />
                      </div>
                    </div>
                    {index < posts.length - 1 && (
                      <hr className="h-px hidden md:block w-96 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
                    )}
                  </div>
                ))}
                {/* Pagination Controls */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default News;
