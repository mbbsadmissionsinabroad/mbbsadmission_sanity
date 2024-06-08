import { urlFor } from "../lib/client";
import { PortableText } from "@portabletext/react";

function TextSerializer(props) {
  const { data, className } = props;

  const addId = (children) => {
    const str = children;
    const strUnderscores =
      str.length > 0 &&
      str
        .toString()
        .replace(/[\s0-9-()&:?]/g, "_")
        .toLowerCase();
    return strUnderscores;
  };

  const serializers = {
    types: {
      image: ({ value }) => (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
          }}
        >
          <img
            srcSet={`${urlFor(value).width(320)} 320w, ${urlFor(value).width(
              640
            )} 640w, ${urlFor(value).width(1024)} 1024w`}
            sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 1024px"
            src={urlFor(value)}
            alt="serializers"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
      code: ({ value }) => (
        <div
          style={{ overflowX: "scroll" }}
          dangerouslySetInnerHTML={{ __html: value.code }}
        />
      ),
    },
    block: {
      p: ({ children }) => (
        <p style={{ minHeight: "1em", lineHeight: "1.5" }}>{children}</p>
      ),
      h1: ({ children }) => <h1 className={className}>{children}</h1>,
      h2: ({ children }) => (
        <h2 className={className} id={addId(children)}>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className={className} id={addId(children)}>
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className={className} id={addId(children)}>
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className={className} id={addId(children)}>
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className={className} id={addId(children)}>
          {children}
        </h6>
      ),
      blockquote: ({ children }) => (
        <blockquote style={{ minHeight: "1em" }}>{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => (
        <li style={{ paddingBottom: "7px" }}>{children}</li>
      ),
    },
  };

  return <PortableText value={data} components={serializers} />;
}

export default TextSerializer;
