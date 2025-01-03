import esbuild from 'esbuild';
import pkg from './package.json' assert {type: 'json' };

const dev = process.argv.includes('--dev');
const minify = !dev;
const watch = process.argv.includes('--watch');

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig={
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: 'dist',
  target: 'es2019',
  watch, //16 버전 이후로 watch를 함수형태로 확인해야 한다고 함 if(w) ....
  external,
}

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
  })
]).catch(() => {
  console.error("build failed");
  process.exit(1) //프로세스 확실히 끄기위함
});

// 우리는 라이브러리를 만들 것이기 때문에 dependencies나 peer dependencies가 추가로 여기에 라이브러리에 번들링 될 필요 없다
// 이말의 뜻은 해당 라이브러리를 사용하는 애플리케이션이 dependencies나 peer dependencies를 설치하기 때문에 번들링할 필요가 없다는 것이다.
// 이렇게 external을 설정하게 되면 번들링할 때 해당 라이브러리를 번들링하지 않는다.그러면 용량도 줄일 수 있다