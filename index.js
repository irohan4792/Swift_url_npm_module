async function convertLink (url_you_need_to_shorten){
    const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${url_you_need_to_shorten}`
      );
      if (response.status === 200) {
        const data = await response.text();
        console.log(data);
      } else {
        console.error("error in converting url");
      }
}

convertLink("https://github.com/irohan4792/Swift_url_npm_module")