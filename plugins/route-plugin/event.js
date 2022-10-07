import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteDidUpdate({ location, previousLocation }) {
      //added timeout due to https://github.com/facebook/docusaurus/issues/3399
      // 100ms is to detect if  highlight code section is present
      if (location.pathname !== previousLocation?.pathname) {
        window.setTimeout(() => {
          const timer = document.querySelector('pre.code-scroll') ? 500 : 0;
          window.setTimeout(() => {
            // logic for page scroll
            const id = location?.hash || '';
            if (id) {
              const ele = document.querySelector(id);
              ele?.scrollIntoView();

            } else {
              document.body.scrollIntoView()
            }

          }, timer)


          // if (location.pathname !== previousLocation?.pathname) {
          //   document.querySelectorAll('.prism-code').forEach((ele) => {
          //     const scrollBy = ele.getAttribute('pos');
          //     ele?.scrollTo({ top: scrollBy, behavior: 'smooth' })
          //   })
          // }

        }, 100)
      }
    }
  }
})();
