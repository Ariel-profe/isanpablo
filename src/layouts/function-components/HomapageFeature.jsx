import DynamicIcon from "@/helpers/DynamicIcon";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {feature_list.map((item, i) => {
        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-primary/60 to-primary transition-transform duration-300 group-hover:scale-x-100" />
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <DynamicIcon icon={item.icon} className="h-7 w-7" />
            </div>
            <h3 className="h4 mt-6 text-xl lg:text-2xl">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
