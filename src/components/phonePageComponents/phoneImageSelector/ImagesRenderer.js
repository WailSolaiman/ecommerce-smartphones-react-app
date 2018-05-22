import React from 'react';
import $ from 'jquery';

class ImagesRenderer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.gallery.image')
      .eq(0)
      .addClass('active');
  }

  addActiveToImage = (number) => {
    $('.gallery.image')
      .removeClass('active');
    $('.gallery.image')
      .eq(number)
      .addClass('active');
    return 'active';
  }

  render() {
    return (
      <div>
        {
          this.props.phone.gallery && this.props.phone.gallery.map((item, itemIndex) => (
            this.props.phone.colors.map((colorItem, colorIndex) => {
              if (itemIndex === colorIndex) {
                return (
                  <img 
                    data-image={colorItem.color}
                    src={`../images/gallery/${this.props.phone.categoryId}${item.image}`}
                    alt={this.props.phone.name}
                    className={`gallery image ${colorItem.color === this.props.selectedColor? this.addActiveToImage(itemIndex) : ''}`}
                  />
                )
              }
            })
          ))
        }
      </div>
    );
  }
}

export default ImagesRenderer;