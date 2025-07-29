import Image from "next/image"



export default function ContentRenderer({ content }) {
  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        const HeadingTag = `h${block.level || 1}` 
        const headingClasses = {
          1: "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
          2: "text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8",
          3: "text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-6",
          4: "text-lg md:text-xl font-semibold text-gray-900 mb-2 mt-4",
        }

        return (
          <HeadingTag
            key={index}
            className={headingClasses[block.level] || headingClasses[1]}
          >
            {block.text}
          </HeadingTag>
        )

      case "paragraph":
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            {block.text}
          </p>
        )

      case "image":
        return (
          <div key={index} className="my-8">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={`/${block.src}`} alt={block.alt || "Room image"} fill className="object-cover" />
            </div>
            {block.caption && <p className="text-sm text-gray-600 text-center mt-2 italic">{block.caption}</p>}
          </div>
        )

      case "list":
        return (
          <ul key={index} className="space-y-3 mb-6">
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        )

      default:
        return null
    }
  }

  return <div className="max-w-4xl mx-auto">{content.map((block, index) => renderBlock(block, index))}</div>
}
