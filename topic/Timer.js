<!--  实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出

分了3种方法第一种是我自己写的，第二和第三来自同事的写法，学习很多 -->
<script>
  function count (start, end) {
    var timer = null;
    console.log(start);
    timer = setInterval(function () {
      if(start< end) {
        console.log(++start);
      }
    },100);
    return {
      cancel: function () {
        clearInterval(timer);
      }
    }
  }
</script>
<script>
function timer(start, end) {
  if (start > end) return;
  console.log(start);
  if (start === end) return;

  var handle = setInterval(function onInterval() {
    ++start;
    console.log(start);
    if (start === end) {
      clearInterval(handle);
    }
  }, 100);
  return {
    cancel: function cancel() {
      clearInterval(handle);
    }
  };
}
</script>
<script>
class Timer {
  private start: number;
  private end: number;
  private observable: Observable<number>;
  private subscription: Subscription;

  constructor(start: number, end: number) {
    this.start = start;
    console.log(start);
    this.end = end;
    this.observable = Observable
      .interval(100)
      .skip(this.start);
    this.startTime();
  }

  private startTime(): void {
    this.subscription = this.observable.subscribe((counter: number) => {
      if (counter > this.end) {
        this.subscription.unsubscribe();
      } else {
        console.log(counter)
      }
    });
  }

  public cancel(): void {
    this.subscriber.unsubscribe();
  }
}

const timer = new Timer(10,20)
</script>
<script>

</script>