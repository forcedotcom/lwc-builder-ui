import buildHtml from "./buildHtml";
import buildJs from "./buildJs";
import buildMeta from "./buildMeta";
import buildCss from "./buildCss";
import buildSvg from "./buildSvg";
import buildTest from "./buildTest";

const build = (contents) => {
  const html = buildHtml(contents);
  const js = buildJs(contents);
  const css = buildCss(contents);
  const svg = buildSvg(contents);
  const meta = buildMeta(contents);
  const test = buildTest(contents);
  return {...contents, html, js, css, meta, svg, test }
}
export default build;