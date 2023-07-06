import RenderAttraction from '../features/attractions/RenderAttraction';

const AttractionInfoScreen = ({ route }) => {
  const { attraction } = route.params;
  return <RenderAttraction attraction={attraction} />;
};

export default AttractionInfoScreen;
