import DynamicIcon from "@/helpers/DynamicIcon";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        return (
          <div
            key={i}
            className="group rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <DynamicIcon
                icon={item.icon}
                className="mt-4 w-6 h-6 text-primary"
              />
              <h3 className="h4 text-xl lg:text-2xl mt-2">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
